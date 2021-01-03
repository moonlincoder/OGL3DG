#version 450 core
#define LIGHTS_MAX 10
//dont fogot delete posbuild shader path

in vec2 fragTextureCoord;
in vec3 fragNormal;
in vec3 fragPos;

out vec4 color;

//struct LightStruct {
//    vec3 position;
//    vec3 color;
//};

uniform vec3 lightPos;
uniform sampler2D TextureSample;
//uniform LightStruct light;//s[LIGHTS_MAX];

void main()
{
    vec3 ambient = vec3(0.1f);
    vec3 objectColor = vec3(0.5f, 0.3f, 0.0f);
    if(lightPos.x < 0) objectColor = vec3(0.0f, 0.5f, 0.1f);
    vec3 lightColor = vec3(1f, 1f, 1f);
    vec3 lightDir = normalize(lightPos - fragPos);
    float diff = max(dot(fragNormal, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;
    vec3 result = (ambient + diffuse) * objectColor;
    color = vec4(result, 1.0) + texture(TextureSample, fragTextureCoord);
}




//
//struct MaterialStuct {
//    vec3 Ambient;  // background color
//    vec3 Diffuse;  // light object
//    vec3 Specular; // reflection
//    float alfa;
//    float shine;
//    int illum;
//};

//uniform MaterialStuct material;
//
//uniform LightStruct lights[LIGHTS_MAX];
//uniform int lightsAmount;

