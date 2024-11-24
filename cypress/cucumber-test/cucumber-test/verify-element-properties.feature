Feature: Verify element properties

        Scenario: Verify email input and button properties
            Given I am on the actions page
             When I click on "Actions"
              And I type "test@example.com" into the email input field
             Then the email input field should have the value "test@example.com"
              And the action button should be visible
              And the action button should not be disabled