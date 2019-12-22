package Controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Models.Banco;
import Models.Player;

@WebServlet("/gerar-banco")
public class GerarBancoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {

		Banco banco = new Banco();
		Player p01 = new Player("p01", 743);
		banco.registraPlayer(p01);
		Player p02 = new Player("p02", 9);
		banco.registraPlayer(p02);
		Player p03 = new Player("p03", 1543);
		banco.registraPlayer(p03);
		Player p04 = new Player("p04", 856);
		banco.registraPlayer(p04);
		Player p05 = new Player("p05", 13);
		banco.registraPlayer(p05);
		Player p06 = new Player("p06", 32);
		banco.registraPlayer(p06);
		Player p07 = new Player("p07", 3213);
		banco.registraPlayer(p07);
		Player p08 = new Player("p08", 104);
		banco.registraPlayer(p08);
		Player p09 = new Player("p09", 51);
		banco.registraPlayer(p09);
		Player p10 = new Player("p10", 97);
		banco.registraPlayer(p10);
		Player p11 = new Player("p11", 777);
		banco.registraPlayer(p11);
		Player p12 = new Player("p12", 200);
		banco.registraPlayer(p12);
		Player p13 = new Player("p13", 345);
		banco.registraPlayer(p13);
		
		resp.sendRedirect("/");
	}

}
