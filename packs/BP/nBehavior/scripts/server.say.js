import { world } from "@minecraft/server";

export let ingMessage = "§lThanks For Downloading §2Minecraft Bedrock §eNaruto Mod";

// Function to send the message to a player
function sendMessageToPlayer(player) {
    player.sendMessage(ingMessage);
}

// Listen for the playerSpawn event
world.afterEvents.playerSpawn.subscribe((event) => {
    sendMessageToPlayer(event.player);
});
