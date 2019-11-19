package Models;

public class Player {
	
	private final String nome;
	private final String senha;
	private final String email;
	private Integer score;
	
	public Player(String nome, String senha, String email) {
		this.nome = nome;
		this.senha = senha;
		this.email = email;
		this.score = 0;
	}
	
	public String getNome() {
		return nome;
	}
	public String getSenha() {
		return senha;
	}
	public String getEmail() {
		return email;
	}
	public Integer getRank() {
		return score;
	}
	public void setRank(Integer pontuacao) {
		this.score = pontuacao;
	}
	
	@Override
	public String toString() {
		return "Player [Apelido: " + getNome() + ", Email: " + getEmail() + ", Score: " + score + "]";
	}
}
