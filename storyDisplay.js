let storyProgress = 1;

function storyForward() {
    storyProgress = storyProgress + 1;
    console.log(`forward`);
    tellStory();
}

function storyBack() {
    storyProgress = storyProgress - 1;
    console.log(`backward`);
    tellStory();

}

function tellStory() {
    if(storyProgress <= 0) {
        storyProgress = 1;
    }

    if(storyProgress <= 1) {
        $("#display1").css("visibility", "visible");
        $("#display2").css("visibility", "hidden");
        $("#display3").css("visibility", "hidden");
        $("#display4").css("visibility", "hidden");
        $("#display5").css("visibility", "hidden");

        $("#storyText").text("Once upon a time there was an ancient magic tree that blessed and gave vitality to the land known as the world tree.");
    }

    if(storyProgress === 2) {
        $("#display1").css("visibility", "hidden");
        $("#display2").css("visibility", "visible");
        $("#display3").css("visibility", "hidden");
        $("#display4").css("visibility", "hidden");
        $("#display5").css("visibility", "hidden");

        $("#storyText").text("Under that tree the land and people were able to prosper under a royal family,");
    }

    if(storyProgress === 3) {
        $("#display1").css("visibility", "hidden");
        $("#display2").css("visibility", "hidden");
        $("#display3").css("visibility", "visible");
        $("#display4").css("visibility", "hidden");
        $("#display5").css("visibility", "hidden");

        $("#storyText").text("But an evil organization tried to seize the tree's magic for themselves.");
    }

    if(storyProgress === 4) {
        $("#display1").css("visibility", "hidden");
        $("#display2").css("visibility", "hidden");
        $("#display3").css("visibility", "hidden");
        $("#display4").css("visibility", "visible");
        $("#display5").css("visibility", "hidden");

        $("#storyText").text("Ufortunately there dark ritual only corrupted and killed the world, infecting and twisting the realms land and creatures as a result.");
    }

    if(storyProgress >= 5) {
        $("#display1").css("visibility", "hidden");
        $("#display2").css("visibility", "hidden");
        $("#display3").css("visibility", "hidden");
        $("#display4").css("visibility", "hidden");
        $("#display5").css("visibility", "visible");

        $("#storyText").text("Now the royal family has charged three heros to find all the trees saplings in order to create a new world tree.");
    }


    if(storyProgress >= 6) {
        storyProgress = 5;
    }


}