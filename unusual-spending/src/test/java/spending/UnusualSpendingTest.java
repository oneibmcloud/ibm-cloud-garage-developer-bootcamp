package spending;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class UnusualSpendingTest {
  @InjectMocks
  private UnusualSpending unusualSpending;

  @Mock
  private
  Fetcher fetcher;

  @Mock
  private
  Categorizer categorizer;

  @Mock
  private
  Emailer emailer;

  @Test
  public void sendEmail() {
    // arrange
    Payments payments = new Payments();
    Payments categorized = new Payments();

    when(fetcher.fetch(1L)).thenReturn(payments);
    when(categorizer.categorize(payments)).thenReturn(categorized);

    // act
    unusualSpending.sendEmail(1L);

    // assert
    verify(emailer).email(1L, categorized);
  }

  @Test
  public void canary() {
    assertTrue("canary should be true", true);
  }
}
