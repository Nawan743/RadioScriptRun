package Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Models.Banco;

public class RankingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Banco banco = new Banco();
		String ranking = banco.listaBanco();
		String[] jogadores_rk = ranking.split("\n");
		RequestDispatcher rd = request.getRequestDispatcher("ranking.jsp");
		request.setAttribute("ranking", jogadores_rk);
		rd.forward(request, response);	
	}
}
