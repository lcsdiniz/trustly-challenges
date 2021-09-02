
public class Person {
	private String name;
	private String nationality;
	private String biggestDream;
	
	Person (String name, String nationality, String biggestDream) {
		this.setName(name);
		this.setNationality(nationality);
		this.setBiggestDream(biggestDream);
	}
	
	public String getName() {
		return name;
	}

	public final void setName(String name) {
		if (name == null || name.isEmpty())
			throw new IllegalArgumentException("Name is required.");
		this.name = name;
	}

	public String getNationality() {
		return nationality;
	}

	public final void setNationality(String nationality) {
		if (nationality == null || nationality.isEmpty())
			throw new IllegalArgumentException("Nationality is required.");
		this.nationality = nationality;
	}

	public String getBiggestDream() {
		return biggestDream;
	}

	public final void setBiggestDream(String biggestDream) {
		if (biggestDream == null || biggestDream.isEmpty())
			throw new IllegalArgumentException("Biggest Dream is required.");
		this.biggestDream = biggestDream;
	}
	
	public void shoutPersonData() {
		System.out.printf("Name: %s \nNationality: %s \nBiggest dream: %s", this.name, this.nationality, this.biggestDream);
	}
}
