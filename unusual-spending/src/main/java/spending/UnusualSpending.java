package spending;

class UnusualSpending {

  private
  Fetcher fetcher;

  private
  Categorizer categorizer;

  private
  Emailer emailer;

	void sendEmail(long userId) {
    Payments payments = fetcher.fetch(userId);
    Payments categorized = categorizer.categorize(payments);
    emailer.email(userId, categorized);
  }

}
