attribute float aRandom;

varying float vRandom;
varying vec2 vUv;
varying float vDisplacement;
varying float vElevation;

uniform float uDisplacement;
uniform float uTime;

void main() {
    // vRandom = aRandom;

    vUv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
}