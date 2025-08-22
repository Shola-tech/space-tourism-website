// Destination data
const destinations = {
    moon: {
        img: "assets/destination/image-moon.png",
        name: "MOON",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 KM",
        time: "3 DAYS"
    },
    mars: {
        img: "assets/destination/image-mars.png",
        name: "MARS",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. KM",
        time: "9 MONTHS"
    },
    europa: {
        img: "assets/destination/image-europa.png",
        name: "EUROPA",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating before heading back to your warm spacecraft.",
        distance: "628 MIL. KM",
        time: "3 YEARS"
    },
    titan: {
        img: "assets/destination/image-titan.png",
        name: "TITAN",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a bit colder!). Bundle up for some exciting adventures on this methane-rich destination.",
        distance: "1.6 BIL. KM",
        time: "7 YEARS"
    }
};

// Destination tab switching
document.querySelectorAll(".dest-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        // Update active button
        document.querySelector(".dest-btn.active").classList.remove("active");
        btn.classList.add("active");

        // Get selected planet
        const planet = destinations[btn.dataset.planet];

        // Update content
        document.getElementById("planet-img").src = planet.img;
        document.getElementById("planet-name").textContent = planet.name;
        document.getElementById("planet-description").textContent = planet.description;
        document.getElementById("planet-distance").textContent = planet.distance;
        document.getElementById("planet-time").textContent = planet.time;
    });
});

const crew = {
    commander: {
        img: "assets/crew/image-douglas-hurley.png",
        role: "Commander",
        name: "Douglas Hurley",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    specialist: {
        img: "assets/crew/image-mark-shuttleworth.png",
        role: "Mission Specialist",
        name: "Mark Shuttleworth",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. He became the first South African to travel to space as a space tourist."
    },
    pilot: {
        img: "assets/crew/image-victor-glover.png",
        role: "Pilot",
        name: "Victor Glover",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18."
    },
    engineer: {
        img: "assets/crew/image-anousheh-ansari.png",
        role: "Flight Engineer",
        name: "Anousheh Ansari",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She became the first self-funded woman to fly to the ISS and the first Iranian in space."
    }
};

document.querySelectorAll(".crew-dot").forEach(dot => {
    dot.addEventListener("click", () => {
        document.querySelector(".crew-dot.active").classList.remove("active");
        dot.classList.add("active");

        const member = crew[dot.dataset.crew];
        document.getElementById("crew-img").src = member.img;
        document.getElementById("crew-role").textContent = member.role;
        document.getElementById("crew-name").textContent = member.name;
        document.getElementById("crew-bio").textContent = member.bio;
    });
});
const technology = {
    vehicle: {
        img: "assets/technology/image-launch-vehicle-portrait.jpg",
        name: "Launch vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    spaceport: {
        img: "assets/technology/image-spaceport-portrait.jpg",
        name: "Spaceport",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to a seaport for ships or airport for aircraft. Our spaceport is located in the beautiful Cape Canaveral, and is capable of launching multiple vehicles a day."
    },
    capsule: {
        img: "assets/technology/image-space-capsule-portrait.jpg",
        name: "Space capsule",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter Earth's atmosphere without wings. Our capsule is where you'll spend your journey, with comfortable seating and panoramic views."
    }
};

document.querySelectorAll(".tech-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".tech-btn.active").classList.remove("active");
        btn.classList.add("active");

        const techItem = technology[btn.dataset.tech];
        document.getElementById("tech-img").src = techItem.img;
        document.getElementById("tech-name").textContent = techItem.name;
        document.getElementById("tech-description").textContent = techItem.description;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navList = document.querySelector("nav ul");

    if (menuBtn && navList) {
        menuBtn.addEventListener("click", () => { 
            navList.classList.toggle("show");
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('header nav ul');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const open = navList.classList.toggle('show');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

