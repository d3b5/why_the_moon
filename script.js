
const buttons = document.querySelectorAll("[data-next]");
const scenes = document.querySelectorAll(".scene");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const nextSceneId = button.dataset.next;

        scenes.forEach(function(scene) {
            scene.classList.remove("active");
        });

        const nextScene = document.getElementById(nextSceneId);

        nextScene.classList.add("active");

    });

});
