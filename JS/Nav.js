(function (){
    function maakNav(){
        return `<div class="navigatiebar">
        <a href="api.html">API</a>
        <a href="Scorekeeper.html">Keeper</a>
        <a href="Account.html">Account</a>
    </div>`;
    }
    document.addEventListener('DOMContentLoaded', function(){
        document.getElementById('navigatie').innerHTML = maakNav();
    });
})();