let active_hotbar = false
let active_hotbar_slots = false
let active_highlight_slot_2 = false
let active_highlight_slot_7 = false

function toggleHotbarFunc() {
    active_hotbar = !active_hotbar
    if (active_hotbar == false) {
        document.querySelector(".hotbar-parent-container").classList.remove("active-hotbar-animation")
        document.querySelector(".hotbar-parent-container").offsetHeight;
        document.querySelector(".hotbar-parent-container").classList.add("reverse-hotbar-animation")
        setTimeout(() => {
            document.querySelector(".hotbar-parent-container").classList.remove("reverse-hotbar-animation")
        }, 250);
    } else {
        document.querySelector(".hotbar-parent-container").classList.add("active-hotbar-animation")
    }
}

function toggleHotbarSlotsFunc() {
    active_hotbar = false;
    toggleHotbarFunc()
    active_hotbar_slots = !active_hotbar_slots
    if (active_hotbar_slots == false) {
        document.querySelector(".hotbar-parent-container").classList.remove("active-slots-animation")
        document.querySelector(".hotbar-parent-container").offsetHeight;
        document.querySelector(".hotbar-parent-container").classList.add("reverse-slots-animation")
        setTimeout(() => {
            document.querySelector(".hotbar-parent-container").classList.remove("reverse-slots-animation")
        }, 1200);
    } else {
        document.querySelector(".hotbar-parent-container").classList.add("active-slots-animation")
    }
}

function addToSlot1Func() {
    active_hotbar_slots = false;
    toggleHotbarSlotsFunc();
    if (!document.querySelector(".item-slot[data-slot-number='1']").querySelector(".count")) {
        document.querySelector(".item-slot[data-slot-number='1']").innerHTML = `
            <img src="https://vignette.wikia.nocookie.net/pubgmobile/images/8/88/Icon_M416.png/revision/latest/scale-to-width-down/185?cb=20180905095227"
            alt="Gun">
        <span class="count">120</span>`
    } else {
        document.querySelector(".item-slot[data-slot-number='1']").querySelector(".count").innerHTML = Number(document.querySelector(".item-slot[data-slot-number='1']").querySelector(".count").innerHTML) + 1
    }
}
function addToSlot2Func() {
    active_hotbar_slots = false;
    toggleHotbarSlotsFunc();
    if (!document.querySelector(".item-slot[data-slot-number='2']").querySelector(".count")) {
        document.querySelector(".item-slot[data-slot-number='2']").innerHTML = `
            <img src="https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/f/fb/Icon_weapon_UMP.png?version=1c8e7f93124e070402d3c0ef2d510a92"
            alt="Gun">
        <span class="count">120</span>`
    } else {
        document.querySelector(".item-slot[data-slot-number='2']").querySelector(".count").innerHTML = Number(document.querySelector(".item-slot[data-slot-number='2']").querySelector(".count").innerHTML) + 1
    }
}
function addToSlot6Func() {
    active_hotbar_slots = false;
    toggleHotbarSlotsFunc();
    if (!document.querySelector(".item-slot[data-slot-number='6']").querySelector(".count")) {
        document.querySelector(".item-slot[data-slot-number='6']").innerHTML = `
            <img src="https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/7/73/Icon_weapon_Skorpion.png"
            alt="Gun">
        <span class="count">120</span>`
    } else {
        document.querySelector(".item-slot[data-slot-number='6']").querySelector(".count").innerHTML = Number(document.querySelector(".item-slot[data-slot-number='6']").querySelector(".count").innerHTML) + 1
    }
}

function toggleHighlightSlot2Func() {
    active_hotbar_slots = false;
    active_highlight_slot_7 = false;
    toggleHotbarSlotsFunc();
    active_highlight_slot_2 = !active_highlight_slot_2
    document.querySelector(".item-slot[data-slot-number='7']").classList.remove("active-highlight")
    if (active_highlight_slot_2 == false) {
        document.querySelector(".hotbar-parent-container").classList.remove("active-highlight")
        document.querySelector(".item-slot[data-slot-number='2']").classList.remove("active-highlight")
    } else {
        document.querySelector(".hotbar-parent-container").classList.add("active-highlight")
        document.querySelector(".item-slot[data-slot-number='2']").classList.add("active-highlight")
    }
}
function toggleHighlightSlot7Func() {
    active_hotbar_slots = false;
    active_highlight_slot_2 = false;
    toggleHotbarSlotsFunc();
    active_highlight_slot_7 = !active_highlight_slot_7
    document.querySelector(".item-slot[data-slot-number='2']").classList.remove("active-highlight")
    if (active_highlight_slot_7 == false) {
        document.querySelector(".hotbar-parent-container").classList.remove("active-highlight")
        document.querySelector(".item-slot[data-slot-number='7']").classList.remove("active-highlight")
    } else {
        document.querySelector(".hotbar-parent-container").classList.add("active-highlight")
        document.querySelector(".item-slot[data-slot-number='7']").classList.add("active-highlight")
    }
}

let queToast = []
let pistol_count = 0;
let active_pistol = false;
let pistol_timmer
function toggleToastPistol() {
    pistol_count += 1;
    if (document.querySelectorAll(".toast-parent-container").length < 2) {
        clearTimeout(pistol_timmer)
        if (active_pistol == false) {
            active_pistol = true;
            const newDiv = document.createElement("div");
            newDiv.className = "toast-parent-container toast-parent-container-pistol";
            newDiv.innerHTML = `<div class="toast-container">
                <img src="https://gamepedia.cursecdn.com/battlegrounds_gamepedia_en/7/73/Icon_weapon_Skorpion.png"
                    alt="Gun">
                <span class="text"><span class="count">${pistol_count}</span> x Insas Added</span>
            </div>`;
            document.querySelector(".toast-main-container").prepend(newDiv);
        } else {
            document.querySelector(".toast-parent-container-pistol").querySelector(".count").innerHTML = pistol_count
        }
        pistol_timmer = setTimeout(() => {
            pistol_count = 0;
            active_pistol = false;
            document.querySelector(".toast-parent-container-pistol").classList.add("remove-toast")
            setTimeout(() => {
                document.querySelector(".toast-parent-container-pistol").remove()
            }, 300);
        }, 3000);
    } else {
        queToast.push("toggleToastPistol")
        runQueToast()
    }
    if (active_pistol == true) {
        document.querySelector(".toast-parent-container-pistol").querySelector(".count").innerHTML = pistol_count
    }
}

let sniper_count = 0;
let active_sniper = false;
let sniper_timmer
function toggleToastSniper() {
    sniper_count += 1;
    if (document.querySelectorAll(".toast-parent-container").length < 2) {
        clearTimeout(sniper_timmer)
        if (active_sniper == false) {
            active_sniper = true;
            const newDiv = document.createElement("div");
            newDiv.className = "toast-parent-container toast-parent-container-sniper";
            newDiv.innerHTML = `<div class="toast-container">
                <img src="https://d1nglqw9e0mrau.cloudfront.net/assets/images/game/icons/weapon_vss_01-16ef9c6c.png"
                    alt="Gun">
                <span class="text"><span class="count">${sniper_count}</span> x Insas Added</span>
            </div>`;
            document.querySelector(".toast-main-container").prepend(newDiv);
        } else {
            document.querySelector(".toast-parent-container-sniper").querySelector(".count").innerHTML = sniper_count
        }
        sniper_timmer = setTimeout(() => {
            sniper_count = 0;
            active_sniper = false;
            document.querySelector(".toast-parent-container-sniper").classList.add("remove-toast")
            setTimeout(() => {
                document.querySelector(".toast-parent-container-sniper").remove()
            }, 300);
        }, 3000);
    } else {
        queToast.push("toggleToastSniper")
        runQueToast()
    }
    if (active_sniper == true) {
        document.querySelector(".toast-parent-container-sniper").querySelector(".count").innerHTML = sniper_count
    }
}

let riffle_count = 0;
let active_riffle = false;
let riffle_timmer
function toggleToastRifle() {
    riffle_count += 3;
    if (document.querySelectorAll(".toast-parent-container").length < 2) {
        clearTimeout(riffle_timmer)
        if (active_riffle == false) {
            active_riffle = true;
            const newDiv = document.createElement("div");
            newDiv.className = "toast-parent-container toast-parent-container-riffle";
            newDiv.innerHTML = `<div class="toast-container">
                <img src="https://th.bing.com/th/id/R.6e1cc8d66f0272b7d718a6fb0ad39a6c?rik=CgBx9OzzdsdSMg&riu=http%3a%2f%2fpubgdmgstats.com%2fimg%2fscarl.png&ehk=F9H9%2fOhRpwORV9M1%2bWky476bL9mJpkcuVdsv18%2fwObM%3d&risl=&pid=ImgRaw&r=0"
                    alt="Gun">
                <span class="text"><span class="count">${riffle_count}</span> x Insas Added</span>
            </div>`;
            document.querySelector(".toast-main-container").prepend(newDiv);
        } else {
            document.querySelector(".toast-parent-container-riffle").querySelector(".count").innerHTML = riffle_count
        }
        riffle_timmer = setTimeout(() => {
            riffle_count = 0;
            active_riffle = false;
            document.querySelector(".toast-parent-container-riffle").classList.add("remove-toast")
            setTimeout(() => {
                document.querySelector(".toast-parent-container-riffle").remove()
            }, 300);
        }, 3000);
    } else {

    }
    if (active_riffle == true) {
        document.querySelector(".toast-parent-container-riffle").querySelector(".count").innerHTML = riffle_count
    }
}

function runQueToast() {
    let queType = queToast[0]
    console.log(queToast)
    queToast.splice(0, 1);
    console.log(queToast)
    if (queType == "toggleToastPistol") {
        setTimeout(() => {
            toggleToastPistol()
        }, 3000);
    } else if (queType == "toggleToastSniper") {
        setTimeout(() => {
            toggleToastSniper()
        }, 3000);
    } else {
        setTimeout(() => {
            toggleToastRifle()
        }, 3000);
    }
}