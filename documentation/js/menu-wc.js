'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">p1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' :
                                            'id="xs-controllers-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' :
                                        'id="xs-injectables-links-module-AppModule-d98e47fbd4f64c1c6b28d2b170d8e14af9e51d27f3f66699a98bc45653dff32d3d79b2a29e75b3c7e1f816f2f28b7e267d7e5fb5950d20d836a80af27e4347c9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-9dff1403a3952296aad7b8599560992229340b377311fdf61f0a7b427c0da66e46f5069183ce498d5df3f848c6ddab09e2e4fb583b72960014c67875afe5b0c4"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-9dff1403a3952296aad7b8599560992229340b377311fdf61f0a7b427c0da66e46f5069183ce498d5df3f848c6ddab09e2e4fb583b72960014c67875afe5b0c4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-9dff1403a3952296aad7b8599560992229340b377311fdf61f0a7b427c0da66e46f5069183ce498d5df3f848c6ddab09e2e4fb583b72960014c67875afe5b0c4"' :
                                            'id="xs-controllers-links-module-AuthModule-9dff1403a3952296aad7b8599560992229340b377311fdf61f0a7b427c0da66e46f5069183ce498d5df3f848c6ddab09e2e4fb583b72960014c67875afe5b0c4"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-9dff1403a3952296aad7b8599560992229340b377311fdf61f0a7b427c0da66e46f5069183ce498d5df3f848c6ddab09e2e4fb583b72960014c67875afe5b0c4"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-9dff1403a3952296aad7b8599560992229340b377311fdf61f0a7b427c0da66e46f5069183ce498d5df3f848c6ddab09e2e4fb583b72960014c67875afe5b0c4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-9dff1403a3952296aad7b8599560992229340b377311fdf61f0a7b427c0da66e46f5069183ce498d5df3f848c6ddab09e2e4fb583b72960014c67875afe5b0c4"' :
                                        'id="xs-injectables-links-module-AuthModule-9dff1403a3952296aad7b8599560992229340b377311fdf61f0a7b427c0da66e46f5069183ce498d5df3f848c6ddab09e2e4fb583b72960014c67875afe5b0c4"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' :
                                        'id="xs-injectables-links-module-PrismaModule-8a45c52f5bc506f9fcef1f4c7b34e596b06323bae0951c4fe354cc2b76489f6abcf1207439120a4bd3a6cf40174b139cda70f7a558a3f53d9bcdd3a9e74b81bf"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' :
                                            'id="xs-controllers-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' :
                                        'id="xs-injectables-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-6b3776bf29ee150fedb5ac9d071939003e23a8067d3696435439e775b5255938234a3f3190d654b2c12d5ce586f393ed08d34ee2bc090d46c9c481f8772883dd"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-6b3776bf29ee150fedb5ac9d071939003e23a8067d3696435439e775b5255938234a3f3190d654b2c12d5ce586f393ed08d34ee2bc090d46c9c481f8772883dd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-6b3776bf29ee150fedb5ac9d071939003e23a8067d3696435439e775b5255938234a3f3190d654b2c12d5ce586f393ed08d34ee2bc090d46c9c481f8772883dd"' :
                                            'id="xs-controllers-links-module-TaskModule-6b3776bf29ee150fedb5ac9d071939003e23a8067d3696435439e775b5255938234a3f3190d654b2c12d5ce586f393ed08d34ee2bc090d46c9c481f8772883dd"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-6b3776bf29ee150fedb5ac9d071939003e23a8067d3696435439e775b5255938234a3f3190d654b2c12d5ce586f393ed08d34ee2bc090d46c9c481f8772883dd"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-6b3776bf29ee150fedb5ac9d071939003e23a8067d3696435439e775b5255938234a3f3190d654b2c12d5ce586f393ed08d34ee2bc090d46c9c481f8772883dd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-6b3776bf29ee150fedb5ac9d071939003e23a8067d3696435439e775b5255938234a3f3190d654b2c12d5ce586f393ed08d34ee2bc090d46c9c481f8772883dd"' :
                                        'id="xs-injectables-links-module-TaskModule-6b3776bf29ee150fedb5ac9d071939003e23a8067d3696435439e775b5255938234a3f3190d654b2c12d5ce586f393ed08d34ee2bc090d46c9c481f8772883dd"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SchoolController.html" data-type="entity-link" >SchoolController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskController.html" data-type="entity-link" >TaskController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDTO.html" data-type="entity-link" >LoginDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDTO.html" data-type="entity-link" >RegisterDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});