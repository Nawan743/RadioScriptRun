package Controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Models.Banco;

@WebServlet("/rank")
public class RankingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		Banco banco = new Banco();
		banco.criarBanco();
		String registros[] = banco.listaBanco().split("\n");
		RequestDispatcher dispatcher = req.getRequestDispatcher("ranking.jsp");
		req.setAttribute("ranking", registros);
		dispatcher.forward(req, resp);
	}
}
