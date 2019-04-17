<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta lang="es">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/nav.css">
	<link rel="stylesheet" type="text/css" href="css/calendario.css">
	<link rel="stylesheet" type="text/css" href="css/resumen.css">
	<link rel="stylesheet" type="text/css" href="css/hero.css">
    <script src="js/main.js"></script>
    <script src="js/guardias.js"></script>
    <script src="js/resumen.js"></script>
<!--    <script src="js/ho.js"></script>-->
	<title>navBar</title>
</head>
<body>
	<header>
		<h1><a href="#" >Calendario Soporte <i class="far fa-calendar-alt"></i></a></h1>
		<input type="checkbox" id="nav-toggle" class="nav-toggle">
		<nav>
			<ul>
				<li><a href="#guardias">Guardias</a></li>
				<li><a href="#ho">HO</a></li>
				<li><a href="#resumen">Resumen Mes</a></li>
			</ul>
		</nav>
		<label for="nav-toggle" class="nav-toggle-label">
			<span></span>
		</label>
	</header>

	<div class="content">
		<section class="hero" >
			<h2>Bienvenido al calendario de soporte</h2>
            <div class="drop"><a href="#guardias">...</a></div>
		</section>
		<section id="guardias">
			<h2 class="calendario_tittle">Guardias</h2>
			<div class="calendario_content">
				<div class="calendario_almanac">
					<div id="prev" class="calenadrio_almanac_prev">
						<p>&lt;ant.</p>
					</div>
					<div id="guardia_almanac_title" class="calenadrio_almanac_title">
						<p>abril</p>
					</div>
					<div id="next" class="calenadrio_almanac_next">
						<p>sig.&gt;</p>
					</div>
                    <div id="guardias_almanac_grid" class="calendario_almanac_grid">

<!--                        EL ALMANAQUE SE CARGA DESDE JavaScript                                                                              -->

                    </div>
				</div>
				<div class="calendario_usuarios">
<!--					<div class="calendario_usuarios_leandro calendario_usuarios_usuario" data-own="leandro" data-guardia-selected="false">-->
<!--						<p>Leandro</p>-->
<!--					</div>-->
					<div class="calendario_usuarios_franco calendario_usuarios_usuario" data-own="franco" data-guardia-selected="false">
						<p>Franco</p>
					</div>
<!--					<div class="calendario_usuarios_nicolas calendario_usuarios_usuario" data-own="nicolas" data-guardia-selected="false">-->
<!--						<p>Nicolas</p>-->
<!--                    </div>-->
					<div class="calendario_usuarios_fernando calendario_usuarios_usuario" data-own="fernando" data-guardia-selected="false">
						<p>Fernando</p>
					</div>
					<div class="calendario_usuarios_danilo calendario_usuarios_usuario" data-own="danilo" data-guardia-selected="flase">
						<p>Danilo</p>
					</div>
				</div>
			</div>
		</section>
		<section id="ho">
			<h2 class="calendario_tittle">HO</h2>
            <div class="calendario_content">
                <div class="calendario_almanac">
                    <div id="prev" class="calenadrio_almanac_prev">
                        <p>&lt;ant.</p>
                    </div>
                    <div id="guardia_almanac_title" class="calenadrio_almanac_title">
                        <p>abril</p>
                    </div>
                    <div id="next" class="calenadrio_almanac_next">
                        <p>sig.&gt;</p>
                    </div>
                    <div id="ho_almanac_grid" class="calendario_almanac_grid">
                        <div class='weekday' data-owner="">lunes <span>1</span></div>
                        <div class='weekday' data-owner="">martes <span>2</span></div>
                        <div class='weekday' data-owner="">miercoles <span>3</span></div>
                        <div class='weekday' data-owner="">jueves <span>4</span></div>
                        <div class='weekday' data-owner="">viernes <span>5</span></div>
                        <div class='weekday' data-owner="">sabado <span>6</span></div>
                        <div class='weekday' data-owner="">domingo <span>7</span></div>
                        <div class='weekday' data-owner="">lunes <span>8</span></div>
                        <div class='weekday' data-owner="">martes <span>9</span></div>
                        <div class='weekday' data-owner="">miercoles <span>10</span></div>
                        <div class='weekday' data-owner="">jueves <span>11</span></div>
                        <div class='weekday' data-owner="">viernes <span>12</span></div>
                        <div class='weekday' data-owner="">sabado <span>13</span></div>
                        <div class='weekday' data-owner="">domingo <span>14</span></div>
                        <div class='weekday' data-owner="">lunes <span>15</span></div>
                        <div class='weekday' data-owner="">martes <span>16</span></div>
                        <div class='weekday' data-owner="">miercoles <span>17</span></div>
                        <div class='weekday' data-owner="">jueves <span>18</span></div>
                        <div class='weekday' data-owner="">viernes <span>19</span></div>
                        <div class='weekday' data-owner="">sabado <span>20</span></div>
                        <div class='weekday' data-owner="">domingo <span>21</span></div>
                        <div class='weekday' data-owner="">lunes <span>22</span></div>
                        <div class='weekday' data-owner="">martes <span>23</span></div>
                        <div class='weekday' data-owner="">miercoles <span>24</span></div>
                        <div class='weekday' data-owner="">jueves <span>25</span></div>
                        <div class='weekday' data-owner="">viernes <span>26</span></div>
                        <div class='weekday' data-owner="">sabado <span>27</span></div>
                        <div class='weekday' data-owner="">domingo <span>28</span></div>
                        <div class='weekday' data-owner="">lunes <span>29</span></div>
                        <div class='weekday' data-owner="">martes <span>30</span></div>
                    </div>
                </div>
				<div class="calendario_usuarios">
					<div class="calendario_usuarios_leandro calendario_usuarios_usuario">
						<p>Leandro</p>
					</div>
					<div class="calendario_usuarios_franco calendario_usuarios_usuario">
						<p>Franco</p>
					</div>
 					<div class="calendario_usuarios_nicolas calendario_usuarios_usuario">
						<p>Nicolas</p>
					</div>
					<div class="calendario_usuarios_fernando calendario_usuarios_usuario">
						<p>Fernando</p>
					</div>
					<div class="calendario_usuarios_danilo calendario_usuarios_usuario">
						<p>Danilo</p>
					</div>
				</div>
			</div>
		</section>
		<section id="resumen">
			<h2 class="calendario_tittle">Resumen Mensual</h2>
			<div class="calendario_content_resumen">
                <div class="calendario_resumen_form" >
                    <form id="form-resumen" action="#">
                        <label for="mes">Mes</label>
                            <select class="formInput" name="mes" id="Resumen-mes">
                                <option value="1">Enero</option>
                                <option value="2">Febrero</option>
                                <option value="3">Marzo</option>
                                <option value="4">Abril</option>
                                <option value="5">Mayo</option>
                                <option value="6">Junio</option>
                                <option value="7">Julio</option>
                                <option value="8">Agosto</option>
                                <option value="9">Setiembre</option>
                                <option value="10">octubre</option>
                                <option value="11">Noviembre</option>
                                <option value="12">Diciembre</option>
                            </select>
                        <label for="anio">Año</label>
                        <input class="formInput" name="anio" id="Resumen-anio" type="number" min="2018">
                        <button class="formButton">Consultar</button>
                    </form>
                </div>
                <div id="formOutput" class="calendario_resumen_result">
                    <table>
                        <tbody></tbody>
                    </table>
                </div>
			</div>
		</section>
	</div>
    <div id="mensajes">
        <span></span>
    </div>
</body>
</html>