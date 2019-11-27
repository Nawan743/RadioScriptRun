package Models;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.util.ArrayList;

public class Banco {
	
	private String pathBanco = "banco.txt";

	private LineNumberReader lineCounter;

	public void criarBanco() throws IOException {
		File banco = new File(pathBanco);
		if (!banco.exists()) {
			banco.createNewFile();
		}
	}

	public void registraPlayer(Player p) throws IOException {
		String player = p.getNome() + " ; " + p.getSenha() + " ; " + p.getEmail() + " ; " + p.getRank();
		File banco = new File(pathBanco);
		BufferedWriter writer = new BufferedWriter(new FileWriter(banco, true));
		writer.append(player);
		writer.newLine();
		writer.close();
		System.out.println("REGISTRADO: " + p.toString());
	}

	public ArrayList<Player> listaBanco() throws IOException {
		lineCounter = new LineNumberReader(new InputStreamReader(new FileInputStream(pathBanco)));
		String nextLine = null;

		ArrayList<Player> players = new ArrayList<Player>();

		while ((nextLine = lineCounter.readLine()) != null) {
			String[] info = nextLine.trim().split(";");
			Player player = new Player(info[0].trim(), info[1].trim(), info[2].trim(),
					Integer.parseInt(info[3].trim()));

			players.add(player);
		}
		lineCounter.close();
		return players;
	}

	public boolean playerExiste(String playerValidar) throws IOException {
		lineCounter = new LineNumberReader(new InputStreamReader(new FileInputStream(pathBanco)));
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
		lineCounter = new LineNumberReader(new InputStreamReader(new FileInputStream(pathBanco)));
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
		File banco = new File(pathBanco);
		lineCounter = new LineNumberReader(new FileReader(banco));
		lineCounter.skip(banco.length());
		return lineCounter.getLineNumber();
	}

}
