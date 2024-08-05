import { system, world, ItemComponentTypes, ItemStack } from "@minecraft/server";

const diamond_sword = "naruto:kunai";

function checkPlayerInventory() {
  for (const player of world.getPlayers()) {
    const inventory = player.getComponent('minecraft:inventory').container;
    for (let i = 0; i < inventory.size; i++) {
      const item = inventory.getItem(i);
      if (item && item.typeId === diamond_sword) {
        item.setLore(['§r§l§0you must work', 'you have to work']);
        inventory.setItem(i, item); // Update the item in the inventory
      }
    }
  }

  // Schedule the next check
  system.runTimeout(checkPlayerInventory, 10); // 20 ticks = 1 second
}

// Start the periodic check
checkPlayerInventory();
