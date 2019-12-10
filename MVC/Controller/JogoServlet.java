package Controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import Models.Banco;
import Models.Player;
import Models.QuickSort;
import Models.ValidaSessao;

@WebServlet("/jogo")
public class JogoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession sessao = req.getSession();
		RequestDispatcher dispatcher;
		
		if (ValidaSessao.estaValidado(sessao)) {
			// Busca o primeiro do ranking
			Banco banco = new Banco();

			ArrayList<Player> players = banco.buscarDadosBanco();

			ArrayList<Player> record = QuickSort.ordenar(players, 0, players.size() - 1);
			req.setAttribute("record", record.get(0).getRank());
			dispatcher = req.getRequestDispatcher("/WEB-INF/jogo.jsp");
			dispatcher.forward(req, resp);
		} else {
			resp.sendRedirect("/");
		}
	}

}