<script>
 import { dark } from '$lib/state.js';
 function toggleDark() {
     const img = new Image();
     img.src = '/background-dark.png';
     img.onload = () => {
         $dark = !$dark;
     };
 }
</script>

<div id="wip">
    <div>
        <p>
            <span>WIP: website is online for testing,</span>
            <span>not ready for general use</span>
        </p>
        <span class="darktoggle" on:click={toggleDark}>🌓</span>
    </div>
</div>

<style>
 .darktoggle {
     cursor: pointer;
 }
 p {
     margin: 0;
     line-height: 1.3em;
     text-align: center;
 }
 span {
     display: inline-block;
 }
 #wip, #wip div {
     height: 4em;
     margin-top: 1em;
     box-sizing: border-box;
 }
 #wip div {
     background: var(--box-color);
     box-shadow: var(--box-shadow);
     text-align: center;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: center;
     position: fixed;
     bottom: 0;
     left: 0;
     width: 100vw;
 }
</style>
