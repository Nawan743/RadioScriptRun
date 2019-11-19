package Models;

public class Player {
	
	private final String nome;
	private final String senha;
	private final String email;
	private Integer pontuacao;
	
	public Player(String nome, String senha, String email) {
		this.nome = nome;
		this.senha = senha;
		this.email = email;
		this.pontuacao = 0;
	}
	
	public Player(String nome, String senha, String email, int pontuacao) {
		this.nome = nome;
		this.senha = senha;
		this.email = email;
		this.pontuacao = pontuacao;
	}
	
//	Apenas para testar o banco de dados no Heroku
	public Player(String nome, Integer score) {
		this.nome = nome;
		this.senha = "test";
		this.email = "test@gmail.com";
		this.pontuacao = score;
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
		return pontuacao;
	}
	public void setRank(Integer pontuacao) {
		this.pontuacao = pontuacao;
	}
	
	@Override
	public String toString() {
		return "Player [Apelido: " + getNome() + ", Email: " + getEmail() + ", Score: " + pontuacao + "]";
	}
}
