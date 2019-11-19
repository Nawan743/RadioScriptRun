package Models;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;

public class Banco {

	private LineNumberReader lineCounter;

	public void criarBanco() throws IOException {
		File banco = new File("banco.txt");
		if (!banco.exists()) {
			banco.createNewFile();
		}
	}

	public void registraPlayer(Player p) throws IOException {
		String player = p.getNome() + " ; " + p.getSenha() + " ; " + p.getEmail() + " ; " + p.getRank();
		File banco = new File("banco.txt");
//		System.out.println(banco.getAbsolutePath());
		BufferedWriter writer = new BufferedWriter(new FileWriter(banco, true));
		writer.append(player);
		writer.newLine();
		writer.close();
	}

	public String listaBanco() throws IOException {
		BufferedReader reader = new BufferedReader(new FileReader("banco.txt"));
		String linha = "";
		String banco = "";

		while (linha != null) {
			banco += linha.concat("\n");
			linha = reader.readLine();
		}

		reader.close();
		return banco;
	}

	public boolean PlayerExiste(String playerValidar) throws IOException {
		lineCounter = new LineNumberReader(new InputStreamReader(new FileInputStream("banco.txt")));
		String linha = null;
		while ((linha = lineCounter.readLine()) != null) {
			String player[] = linha.split(" ; ");
			if (player[0].equalsIgnoreCase(playerValidar)) {
				return true;
			}
		}
		return false;
	}

	public boolean senhaValida(String playerValidar, String senhaValidar) throws IOException {
		lineCounter = new LineNumberReader(new InputStreamReader(new FileInputStream("banco.txt")));
		String linha = null;
		while ((linha = lineCounter.readLine()) != null) {
			String player[] = linha.split(" ; ");
			if (player[0].equalsIgnoreCase(playerValidar) && player[1].equals(senhaValidar)) {
				return true;
			}
		}
		return false;
	}

	public int qntPlayers() throws IOException {
		File banco = new File("banco.txt");
		lineCounter = new LineNumberReader(new FileReader(banco));
		lineCounter.skip(banco.length());
		return lineCounter.getLineNumber();
	}
	
}
