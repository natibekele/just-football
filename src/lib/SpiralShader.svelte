<script type="module">
    import { onMount } from "svelte"
    import * as THREE from "three"

    const currentTime = new Date()
    const milliseconds = currentTime.getTime();
    const rand = Math.floor((milliseconds / 5000) % 9)

    onMount(() => {
        // Canvas
        const canvas = document.querySelector('canvas')

        // Scene
        const scene = new THREE.Scene()

        /**
         * Textures
         */

        const geometry = new THREE.PlaneGeometry(6,1,32,1)
        const count = geometry.attributes.position.count
        const material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            uniforms: {
                uTime: { value: 0 }
            },
            vertexShader: `
                attribute float aRandom;

                varying float vRandom;
                varying float vTime;
                varying vec2 vUv;
                varying float vDisplacement;
                varying float vElevation;

                uniform float uDisplacement;
                uniform float uTime;

                void main() {
                    vRandom = aRandom;

                    vUv = uv;

                    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                    // modelPosition.xy += sin(modelPosition.x* 8.0 - uTime) * 0.0125;
                    vDisplacement = sin(modelPosition.x* 8.0 - uTime * 0.5) * 1.0;
                    vTime = uTime;

                    vec4 viewPosition = viewMatrix * modelPosition;
                    vec4 projectedPosition = projectionMatrix * viewPosition;
                    gl_Position = projectedPosition;
                }
            `,
            fragmentShader: `
                #define PI 3.1415926535897932384626433832795
                varying float vRandom;
                varying float vDisplacement;
                varying float vTime;
                varying vec2 vUv;
                // Classic Perlin 3D Noise 
                // by Stefan Gustavson
                //
                vec4 permute(vec4 x)
                {
                    return mod(((x*34.0)+1.0)*x, 289.0);
                }
                vec2 fade(vec2 t)
                {
                    return t*t*t*(t*(t*6.0-15.0)+10.0);
                }

                float cnoise(vec2 P)
                {
                    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
                    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
                    Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
                    vec4 ix = Pi.xzxz;
                    vec4 iy = Pi.yyww;
                    vec4 fx = Pf.xzxz;
                    vec4 fy = Pf.yyww;
                    vec4 i = permute(permute(ix) + iy);
                    vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
                    vec4 gy = abs(gx) - 0.5;
                    vec4 tx = floor(gx + 0.5);
                    gx = gx - tx;
                    vec2 g00 = vec2(gx.x,gy.x);
                    vec2 g10 = vec2(gx.y,gy.y);
                    vec2 g01 = vec2(gx.z,gy.z);
                    vec2 g11 = vec2(gx.w,gy.w);
                    vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
                    g00 *= norm.x;
                    g01 *= norm.y;
                    g10 *= norm.z;
                    g11 *= norm.w;
                    float n00 = dot(g00, vec2(fx.x, fy.x));
                    float n10 = dot(g10, vec2(fx.y, fy.y));
                    float n01 = dot(g01, vec2(fx.z, fy.z));
                    float n11 = dot(g11, vec2(fx.w, fy.w));
                    vec2 fade_xy = fade(Pf.xy);
                    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
                    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
                    return 2.3 * n_xy;
                }

                void main() {
                    float angle = (atan(vUv.x - 0.5, vUv.y - 0.5) + sin(mod(vTime,20.0) * vUv.x) * 0.3 + 1.0) / (PI * 2.0) + 0.5;
                    float strength = mod(angle * 20.0, 1.0);

                    // vec3 baseColor = vec3(0.97, 0.94, 0.89);
                    vec3 baseColor = vec3(0.035, 0.75, 0.96);
                    vec3 uvColor = vec3(vUv, 1.0);
                    vec3 mixedColor = mix(baseColor, uvColor, strength);
                    gl_FragColor = vec4(mixedColor.z, mixedColor.y, mixedColor.x, 1.0);
                }
            `
        })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        /**
         * Sizes
         */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            setCameraDistance();

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        /**
         * Camera
         */
        // Base camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

        const setCameraDistance = () => {
            camera.position.set(0,-0.9,1.5);
        }
        setCameraDistance()
        scene.add(camera)

        // Controls
        // const controls = new OrbitControls(camera, canvas)
        // controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        const backgroundColor = new THREE.Color(0xffffff)
        backgroundColor.a = 0.5;
        renderer.setClearColor(0xffffff, 0)
        renderer.setClearAlpha(1)

        /**
         * Animate
         */
        const clock = new THREE.Clock()

        const tick = () =>
        {
            const elapsedTime = clock.getElapsedTime()

            // Update controls
            // controls.update()

            // Render
            renderer.render(scene, camera)

            // uTime update
            material.uniforms.uTime.value = elapsedTime;

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    })
</script>


<div class="container">
    <canvas class="canvas">
    </canvas>
</div>

<style>
    .container {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .canvas {
        position: absolute;
        top: 0%;
        left: 0%;
        height: 100%;
        width: 100%;
        background: none;
        z-index: -1;
        cursor: pointer;
    }

    @media(max-width: 800px) {
/*        .canvas {
            height: 50%;
            width: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }*/
    }
</style>