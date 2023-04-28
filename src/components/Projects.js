import React from 'react'

export default function Projects() {
    return (
        <div class="titlerow side-section">
                <div class="col-4 webdev">
                    <div id="myDIV" class="webDevelopment">Web Development</div>

                    <div class="wd_projectContainer">
                        <h4><strong>Crypto Muggles</strong>
                            {/* <a href="https://github.com/liamok19/Crypto-Muggles.git">
                                <img class="social-icon"  src="./assets/images/github_icon.png" alt="github-icon" width="20px" height="20px" />
                            </a> */}
                        </h4>
                        <p class="projectLogline">Logline: Fetch 2 API’s to display the latest statistics and news on the top 5 coins of Cryptocurrency.</p>
                        <img id="wd_projectLink0" class="wd_projects" src="./assets/images/project_images/final-look.gif" alt="groupproject1_gif" />
                    </div>

                    <div class="wd_projectContainer">
                        <h4><strong>Weather Dashboard</strong>
                            {/* <a href="https://github.com/liamok19/weatherDashboard.git">
                                <img class="social-icon"  src="./assets/images/github_icon.png" alt="github-icon" width="20px" height="20px" />
                            </a> */}
                        </h4>
                        <p class="projectLogline">Logline: Users can search any city for the current and 5-day future forecast of the weather. Local storage applied for users to review previous searches.</p>
                        <img id="wd_projectLink1" class="wd_projects" src="./assets/images/project_images/WeatherDashboard.gif" alt="weather-gif" />
                    </div>

                    <div class="wd_projectContainer"> 
                        <h4><strong>Password Generator</strong>
                            {/* <a href="https://github.com/liamok19/passwordGeneratorJS">
                                <img class="social-icon"  src="./assets/images/github_icon.png" alt="github-icon" width="20px" height="20px" />
                            </a> */}
                        </h4>
                        <p class="projectLogline">Logline: Users are prompted with a series of questions as a result of their choice; they're displayed with a generated password.</p>                        
                        <img id="wd_projectLink2" class="wd_projects" src="./assets/images/project_images/Password Generator.gif" alt="password-gif" />
                    </div>
                </div>
                <div class="col-4 anim">
                    <div id="myDIV" class="animProduction">Animation - Production</div>
                    <div class="anim_projectContainer">
                        <h4><strong>What If...?</strong></h4>
                        <p class="projectLogline">Role: 2D/3D FX, Lighting and Compositing Coordinator. Backend Delivery. Marketing Coordinator</p>
                        <img  id="anim_projectLink0" onclick="myFunction()" class="anim_projects" src="./assets/images/whatif_2021.jpg" alt="whatif.img" />
                    </div>

                    <div class="anim_projectContainer">
                        <h4><strong>Maya the Bee 3 The Golden Orb</strong></h4>
                        <p class="projectLogline">Role: Animation Coordinator and Marketing Coordinator</p>
                        <img id="anim_projectLink1" class="anim_projects" src="./assets/images/project_images/mayathebee3_logo.png" alt="mtb3_logo" />
                    </div>

                    <div id="animProject3" class="anim_projectContainer">
                        <h4><strong>100% Wolf</strong></h4>
                        <p class="projectLogline">Role: Layout Coordinator and Marketing Coordinator</p>
                        <img id="anim_projectLink2" class="anim_projects" src="./assets/images/project_images/100_wolf_film.png" alt="wolf_logo" />
                    </div>
                </div>
                <div class="col-4 vfx">
                    <div id="myDIV" class="vfxProduction">Visual FX - Production</div>
                    <div class="vfx_projectContainer">
                        <h4><strong>Winchester</strong></h4>
                        <p class="projectLogline">Role: VFX Coordinator (Lighting, FX and Compositing. Backend Delivery)</p>
                        <img  id="vfx_projectLink0" class="vfx_projects" src="./assets/images/project_images/winchester_img.jpg" alt="winchester_logo" />
                    </div>
                    <div class="vfx_projectContainer">
                        <h4><strong>Underworld Blood Wars</strong></h4>
                        <p class="projectLogline">Role: VFX Coordinator</p>
                        <img id="vfx_projectLink1" class="vfx_projects" src="./assets/images/project_images/Underworld-blood-wars-movie-logo.png" alt="underworld_logo" />
                    </div>
                    <div id="vfxProject3" class="vfx_projectContainer">
                        <h4><strong>Upgrade</strong></h4>
                        <p class="projectLogline">Role: VFX Coordinator</p>
                        <img id="vfx_projectLink2" class="vfx_projects" src="./assets/images/project_images/upgrade_img.jfif" alt="upgrade_logo" />
                    </div>
            </div>
        </div>
    );
}