"use strict";
import { api_key, fetchDataFromServer } from "./api.js";

export function sidebar() {
    const genreList = {};

    fetchDataFromServer(
        `
    https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
        function ({ genres }) {
            for (const { id, name } of genres) {
                genreList[id] = name;
            }
            genreLink();
        }
    );

    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");
    sidebarInner.innerHTML = `
                <div class="sidebar-list">
                    <p class="title">Genre</p>
                    
                </div>
                <!-- Language -->
                <div class="sidebar-list">
                    <div class="sidebar-list">
                        <p class="title">Language</p>
    
                        <a href="./movie-list.html" class="sidebar-link">English</a>
    
                        <a href="./movie-list.html" class="sidebar-link">Hindi</a>
    
                        <a href="./movie-list.html" class="sidebar-link">Bengali</a>
    
                        <a href="./movie-list.html" class="sidebar-link">French</a>
    
                        <a href="./movie-list.html" class="sidebar-link">Chinese</a>
    
                        <a href="./movie-list.html" class="sidebar-link">German</a>
    
                        <a href="./movie-list.html" class="sidebar-link">Vietnam</a>
                    </div>
                </div>
                <!-- footer -->
                <div class="sidebar-footer">
                    <p class="copyright">
                        Copyright 2023
                        <a href="https://github.com/KonggMinhh">codewithKongMinh</a>
                    </p>
                    <img
                        src="./icons/tmdb-logo.svg"
                        width="130"
                        height="17"
                        alt="the movie database logo"
                    />
                </div>
    `;
    const genreLink = function () {
        for (const [genreId, genreName] of Object.entries(genreList)) {
            const link = document.createElement("a");
            link.classList.add("sidebar-link");
            link.setAttribute("href", "./movie-list.html");
            link.setAttribute("menu-close", "");
            // link.setAttribute(
            //     "onclick",
            //     `getMovieList("with_genres= ${genreId}", "${genreName}")`
            // );
            link.textContent = genreName;
            sidebarInner.querySelectorAll(".sidebar-list")[0].appendChild(link);
        }
        const sidebar = document.querySelector("[sidebar]");
        sidebar.appendChild(sidebarInner);
        toggleSidebar(sidebar);
    };
    const toggleSidebar = function (sidebar) {
        const sideBarBtn = document.querySelector("[menu-btn]");
        const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
        const sidebarClose = document.querySelectorAll("[menu-close]");
        const overlay = document.querySelector("[overlay]");
        addEventOnElements(sidebarTogglers, "click", function () {
            sidebar.classList.toggle("active");
            sideBarBtn.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        addEventOnElements(sidebarClose, "click", function () {
            sidebar.classList.remove("active");
            sideBarBtn.classList.remove("active");
            overlay.classList.remove("active");
        });
    };
}
