package Controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Models.Banco;
import Models.Player;
import Models.QuickSort;

@WebServlet("/rank")
public class RankingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		Banco banco = new Banco();

		ArrayList<Player> players = banco.buscarDadosBanco();

		ArrayList<Player> top10 = QuickSort.ordenar(players, 0, players.size() - 1);

		RequestDispatcher dispatcher = req.getRequestDispatcher("/WEB-INF/rank.jsp");
		req.setAttribute("ranking", top10);
		dispatcher.forward(req, resp);
	}
}
