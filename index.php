<?php
// public_html/index.php

declare(strict_types=1);

// Load core bootstrap
require_once '../c0r3.php';
require_once $includes . 'meta.php';
require_once $includes . 'header.php';
require_once $includes . 'main-nav.php'; 
?>

    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>

<?php
require_once $includes . 'footer-content.php';
require_once $includes . 'footer.php'; 
?>
