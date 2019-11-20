package Controller;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/limpar-banco")
public class LimpaBancoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		File banco = new File("banco.txt");
		BufferedWriter writer = new BufferedWriter(new FileWriter(banco, false));
		writer.append("");
		writer.close();
		System.out.println("Banco de dados limpado!");
	
		resp.sendRedirect("/");
	}

}
