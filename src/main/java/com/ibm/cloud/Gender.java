package com.ibm.cloud;

public enum Gender {
	FEMALE, MALE;
	
	public String toString() {
		switch(this) {
		
		case FEMALE:
			return "Female";
		
		case MALE:
			return "Male";
		}
		
		return null;
	}
}
