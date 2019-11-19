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

	static {
		Banco b = new Banco();
		Player p01 = new Player("p01", 743);
		try {
			b.registraPlayer(p01);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p02 = new Player("p02", 9);
		try {
			b.registraPlayer(p02);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p03 = new Player("p03", 1543);
		try {
			b.registraPlayer(p03);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p04 = new Player("p04", 856);
		try {
			b.registraPlayer(p04);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p05 = new Player("p05", 13);
		try {
			b.registraPlayer(p05);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p06 = new Player("p06", 32);
		try {
			b.registraPlayer(p06);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p07 = new Player("p07", 1543);
		try {
			b.registraPlayer(p07);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p08 = new Player("p08", 104);
		try {
			b.registraPlayer(p08);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p09 = new Player("p09", 51);
		try {
			b.registraPlayer(p09);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p10 = new Player("p10", 97);
		try {
			b.registraPlayer(p10);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p11 = new Player("p11", 1543);
		try {
			b.registraPlayer(p11);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p12 = new Player("p12", 200);
		try {
			b.registraPlayer(p12);
		} catch (IOException e) {
			e.printStackTrace();
		}
		Player p13 = new Player("p13", 345);
		try {
			b.registraPlayer(p13);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private LineNumberReader lineCounter;

	public void criarBanco() throws IOException {
		File banco = new File("banco.txt");
		if (!banco.exists()) {
			banco.createNewFile();
		}
		System.out.println(banco.getAbsolutePath());
	}

	public void registraPlayer(Player p) throws IOException {
		String player = p.getNome() + " ; " + p.getSenha() + " ; " + p.getEmail() + " ; " + p.getRank();
		File banco = new File("banco.txt");
		BufferedWriter writer = new BufferedWriter(new FileWriter(banco, true));
		writer.append(player);
		writer.newLine();
		writer.close();
	}

	public ArrayList<Player> listaBanco() throws IOException {
		lineCounter = new LineNumberReader(new InputStreamReader(new FileInputStream("banco.txt")));
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
