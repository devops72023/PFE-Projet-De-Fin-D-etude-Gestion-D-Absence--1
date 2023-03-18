<?php include 'Inc/Header.php';?>

<main>
    <div class="dashboard-container">
        <div class="teacher">
            <h1>BIENVENUE M.MELK</h1>
            <div class="time-now">10:45</div>
        </div>
        <div class="filter-section">
            <div class="filter-classes">
                <a href="#" class="strong">Tous les classes</a href="#">
                <a href="#">2 éme années</a>
                <a href="#">1 er années</a>
            </div>
            <form method="post" action="#" class="filter-search" onsubmit="()=>this.preventDefault()">
                <input type="search" id="search-box" name="search-text" placeholder="Recherche classe">
                <button type="submit name="submit"><i class="fas fa-search"></i></button>
            </form>
            <form method="post" action="#" class="filter-date">
                <div class="filter-dates">
                    <div class="choosed-date" id="choosed-date">
                        <div class="the-date">--- Choose a date ---</div>
                        <i class="fas fa-caret-down"></i>
                    </div>
                    <div id="dates-list" class="dates-list">
                        <div class="option">--- Choose a date ---</div>
                        <div class="option">03/06/2023</div>
                        <div class="option">03/06/2023</div>
                        <div class="option">03/06/2023</div>
                    </div>
                </div>
            </form>
        </div>
        <div class="classes-cards">
            <div class="card">
                <div class="branch-img" >
                    <img src="../../Images/branch-images/mcw-1.png" />
                </div>
                <h2 class="class-level">1</h2>
                <h3 class="class-name">mcw</h3>
                <span class="this"></span>
            </div>
            <div class="card">
                <div class="branch-img" >
                    <img src="../../Images/branch-images/mcw-1.png" />
                </div>
                <h2 class="class-level">1</h2>
                <h3 class="class-name">mcw</h3>
            </div>
            <div class="card">
                <div class="branch-img" >
                    <img src="../../Images/branch-images/mcw-1.png" />
                </div>
                <h2 class="class-level">1</h2>
                <h3 class="class-name">mcw</h3>
            </div>
            <div class="card">
                <div class="branch-img" >
                    <img src="../../Images/branch-images/mcw-1.png" />
                </div>
                <h2 class="class-level">1</h2>
                <h3 class="class-name">mcw</h3>
            </div>
            <div class="card">
                <div class="branch-img" >
                    <img src="../../Images/branch-images/mcw-1.png" />
                </div>
                <h2 class="class-level">1</h2>
                <h3 class="class-name">mcw</h3>
            </div>
            <div class="card">
                <div class="branch-img" >
                    <img src="../../Images/branch-images/mcw-1.png" />
                </div>
                <h2 class="class-level">1</h2>
                <h3 class="class-name">mcw</h3>
            </div>
        </div>
    </div>
</main>