//______  _______ _______ _______ _______ _______
//|     \ |______    |    |______ |_____| |  |  |
//|_____/.______| .  |    |______ |     | |  |  |
// Copyright (c) 2020 Dark Shield Team. All rights reserved.
// Created by moonlin on 006 06.09.20 at 20:46.

#ifndef OGL3DG_ENGINE_H
#define OGL3DG_ENGINE_H

#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include "Game.h"
#include "Settings.h"
#include "Shader.h"
#include "Object.h"
#include "Camera.h"

class Engine {
private:
    int RESOLUTION_WIDTH;
    int RESOLUTION_HEIGHT;
    Settings *settings;
    Game  *game = nullptr;
    double deltaTime = 0.0;
    double lastTime = 0.0;

public:
    GLFWwindow *window;
    Camera *camera;

    explicit Engine(Game *g);
    int run();
    void resizeCallback(GLFWwindow* window, int width, int height);
    void InputHandler(GLFWwindow* window, int key, int scancode, int action, int mods);
    ~Engine();

};


#endif //OGL3DG_ENGINE_H
