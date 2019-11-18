package View;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/jogo")
public class Jogo extends HttpServlet {
	private static final long serialVersionUID = 1L;

	RequestDispatcher dispatcher;
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		dispatcher = req.getRequestDispatcher("/WEB-INF/jogo.jsp");
		dispatcher.forward(req, resp);
	}
}