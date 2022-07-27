<template>
    <div>
        <h1>SVG</h1>
        <img src="~/assets/svg_sample.svg" />
        <h1>html</h1>
        <svg width="210" height="210">
            <rect x="5" y="5" width="200" height="200" style="fill: red; stroke: black; stroke-width: 10px"></rect>
        </svg>
        <h1>loading_sample</h1>
        <!-- 1 -->
        <div class="loader loader--style1" title="0">
            <svg
                version="1.1"
                id="loader-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="40px"
                height="40px"
                viewBox="0 0 40 40"
                enable-background="new 0 0 40 40"
                xml:space="preserve">
                <path
                    opacity="0.2"
                    fill="#000"
                    d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" />
                <path
                    fill="#000"
                    d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z">
                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite" />
                </path>
            </svg>
        </div>
        <!-- 1 -->

        <!-- 2 -->
        <div>
            <svg id="loading">
                <g>
                    <path class="ld-l" fill="#39C0C4" d="M43.6,33.2h9.2V35H41.6V15.2h2V33.2z" />
                    <path
                        class="ld-o"
                        fill="#39C0C4"
                        d="M74.7,25.1c0,1.5-0.3,2.9-0.8,4.2c-0.5,1.3-1.2,2.4-2.2,3.3c-0.9,0.9-2,1.6-3.3,2.2
		c-1.3,0.5-2.6,0.8-4.1,0.8s-2.8-0.3-4.1-0.8c-1.3-0.5-2.4-1.2-3.3-2.2s-1.6-2-2.2-3.3C54.3,28,54,26.6,54,25.1s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3s2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8s2.8,0.3,4.1,0.8c1.3,0.5,2.4,1.2,3.3,2.2c0.9,0.9,1.6,2,2.2,3.3
		C74.4,22.2,74.7,23.6,74.7,25.1z M72.5,25.1c0-1.2-0.2-2.3-0.6-3.3c-0.4-1-0.9-2-1.6-2.8c-0.7-0.8-1.6-1.4-2.6-1.9
		c-1-0.5-2.2-0.7-3.4-0.7c-1.3,0-2.4,0.2-3.4,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3
		c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9c1,0.5,2.2,0.7,3.4,0.7c1.3,0,2.4-0.2,3.4-0.7
		c1-0.5,1.9-1.1,2.6-1.9c0.7-0.8,1.3-1.7,1.6-2.7C72.4,27.4,72.5,26.3,72.5,25.1z" />
                    <path class="ld-a" fill="#39C0C4" d="M78.2,35H76l8.6-19.8h2L95.1,35h-2.2l-2.2-5.2H80.4L78.2,35z M81.1,27.9h8.7l-4.4-10.5L81.1,27.9z" />
                    <path
                        class="ld-d"
                        fill="#39C0C4"
                        d="M98,15.2h6.6c1.2,0,2.5,0.2,3.7,0.6c1.2,0.4,2.4,1,3.4,1.9c1,0.8,1.8,1.9,2.4,3.1s0.9,2.7,0.9,4.3
		c0,1.7-0.3,3.1-0.9,4.3s-1.4,2.3-2.4,3.1c-1,0.8-2.1,1.5-3.4,1.9c-1.2,0.4-2.5,0.6-3.7,0.6H98V15.2z M100,33.2h4
		c1.5,0,2.8-0.2,3.9-0.7c1.1-0.5,2-1.1,2.8-1.8c0.7-0.8,1.3-1.6,1.6-2.6s0.5-2,0.5-3c0-1-0.2-2-0.5-3c-0.4-1-0.9-1.8-1.6-2.6
		c-0.7-0.8-1.6-1.4-2.8-1.8c-1.1-0.5-2.4-0.7-3.9-0.7h-4V33.2z" />
                    <path class="ld-i" fill="#39C0C4" d="M121.2,35h-2V15.2h2V35z" />
                    <path class="ld-n" fill="#39C0C4" d="M140.5,32.1L140.5,32.1l0.1-16.9h2V35h-2.5l-11.5-17.1h-0.1V35h-2V15.2h2.5L140.5,32.1z" />
                    <path
                        class="ld-g"
                        fill="#39C0C4"
                        d="M162.9,18.8c-0.7-0.7-1.5-1.3-2.5-1.7c-1-0.4-2-0.6-3.3-0.6c-1.3,0-2.4,0.2-3.4,0.7s-1.9,1.1-2.6,1.9
		c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9
		s2.2,0.7,3.4,0.7c1.1,0,2.1-0.1,3.1-0.4c0.9-0.2,1.7-0.5,2.3-0.9v-6h-4.6v-1.8h6.6v9c-1.1,0.7-2.2,1.1-3.5,1.5
		c-1.3,0.3-2.5,0.5-3.9,0.5c-1.5,0-2.9-0.3-4.1-0.8s-2.4-1.2-3.3-2.2c-0.9-0.9-1.6-2-2.1-3.3s-0.8-2.7-0.8-4.2s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3c0.9-0.9,2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8c1.6,0,3,0.2,4.1,0.7s2.2,1.1,3,2L162.9,18.8z" />
                </g>
            </svg>

            <svg width="182px" height="182px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple">
                <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
                <g>
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                    <circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" stroke-width="2" stroke-linecap="round">
                        <animate attributeName="r" dur="4s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                    </circle>
                </g>
                <g>
                    <animate attributeName="opacity" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="1;1;0"></animate>
                    <circle cx="50" cy="50" r="40" stroke="#eeeeee" fill="none" stroke-width="2" stroke-linecap="round">
                        <animate attributeName="r" dur="4s" repeatCount="indefinite" begin="2s" keyTimes="0;0.33;1" values="0;22;44"></animate>
                    </circle>
                </g>
            </svg>
        </div>
        <!-- 2 -->
        <!-- 3 -->
        <div class="loader loader--style6" title="5">
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style="enable-background: new 0 0 50 50"
                xml:space="preserve">
                <rect x="0" y="13" width="4" height="5" fill="#333">
                    <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="10" y="13" width="4" height="5" fill="#333">
                    <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="20" y="13" width="4" height="5" fill="#333">
                    <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                </rect>
            </svg>
        </div>
        <!-- 3 -->
        <article>
            <h1>moving sign</h1>
            <svg width="800" height="160" viewBox="-10 -120 800 160">
                <text class="svg_ordinary">ORDINARY CODE</text>
            </svg>
        </article>
        <article>
            <h1>appear sign</h1>
            <svg width="400" height="160" viewBox="-10 0 400 160">
                <text class="svg_code" x="0" y="50%">Z</text>
                <text class="svg_code" x="47" y="50%">Z</text>
                <text class="svg_code" x="93" y="50%">E</text>
                <text class="svg_code" x="135" y="50%">M</text>
                <text class="svg_code" x="193" y="50%">A</text>
                <text class="svg_code" x="237" y="50%">L</text>
            </svg>
        </article>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.svg_ordinary {
    font-family: 'Staatliches', cursive;
    font-size: 6em;
    fill: #f1c164;
    stroke: black;
    stroke-width: 3px;
    stroke-dasharray: 400px;
    stroke-dashoffset: 0;
    animation: stroke 3s linear;
}
@keyframes stroke {
    0% {
        stroke-dashoffset: 400px;
    }
    100% {
        stroke-dashoffset: 0px;
    }
}
.svg_code {
    font-family: 'Staatliches', cursive;
    font-size: 6em;
    stroke-dasharray: 400px;
    fill: transparent;
    animation: strokeTwo 1s linear;
    animation-fill-mode: forwards;
    stroke-dasharray: 400px;
    stroke-dashoffset: 0;
}
@keyframes strokeTwo {
    0% {
        opacity: 0;
        stroke: #f1c164;
        stroke-width: 3px;
        stroke-dashoffset: 400px;
    }
    70% {
        fill: transparent;
    }
    100% {
        opacity: 100;
        fill: #f1c164;
        stroke-dashoffset: 0px;
        stroke: black;
        stroke-width: 3px;
    }
}

.svg_code:nth-child(1) {
    animation-delay: 0s;
}
.svg_code:nth-child(2) {
    animation-delay: 0.5s;
}
.svg_code:nth-child(3) {
    animation-delay: 1s;
}
.svg_code:nth-child(4) {
    animation-delay: 1.5s;
}
.svg_code:nth-child(5) {
    animation-delay: 2s;
}
.svg_code:nth-child(6) {
    animation-delay: 2.5s;
}
</style>
