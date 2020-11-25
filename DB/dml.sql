INSERT INTO Members( Email, [name], [password], [status]) VALUES('123email','Donald Trump','password','authorized')

GO

INSERT INTO CoffeeDates([date],venue,cost,Booker) VALUES(GETDATE() + 1,'coffee shop',10.57,'Donald Trump')

GO 