import pandas as pd
from pathlib import Path

base_dir = Path(__file__).resolve().parents[1]
csv_path = base_dir / "data" / "Walmart_Sales.csv"

df = pd.read_csv(csv_path)
print("Dimensão do dataset:")
print(df.shape)

print("\nInformações gerais:")
print(df.info())

print("\nPrimeiras linhas:")
print(df.head())

print("\nValores nulos:")
print(df.isnull().sum())

df['Date'] = pd.to_datetime(df['Date'], format='%d-%m-%Y')
df["Date"] = df["Date"].dt.strftime("%m-%d-%Y")

df = df.sort_values(['Store', 'Date'])

df['Weekly_Sales'] = df['Weekly_Sales'].round(2)
df['Temperature'] = df['Temperature'].round(0)  
df['Fuel_Price'] = df['Fuel_Price'].round(2)
df['CPI'] = df['CPI'].round(3)
df['Unemployment'] = df['Unemployment'].round(3)

#lojas com menor e maior desemprego
unemployment_by_store = df.groupby('Store')['Unemployment'].mean()

print("\nMenor desemprego:", unemployment_by_store.idxmin(), unemployment_by_store.min())
print("Maior desemprego:", unemployment_by_store.idxmax(), unemployment_by_store.max())

correlation_all = df['CPI'].corr(df['Weekly_Sales'])
print("\nCorrelação geral CPI x Weekly_Sales:", correlation_all)

#quais feriados afetam mais as vendas semanais?
avg_sales_by_holiday = df.groupby("Holiday_Flag")["Weekly_Sales"].mean()
print("\nMédia de vendas - Semana normal (0) vs Feriado (1):")
print(avg_sales_by_holiday)

#quais lojas no conjunto de dados têm a menor e a maior taxa de desemprego?
unemployment_by_store = df.groupby("Store")["Unemployment"].mean()

store_min = unemployment_by_store.idxmin()
store_max = unemployment_by_store.idxmax()

print("\nLoja com menor desemprego:")
print(f"Loja {store_min} → {unemployment_by_store[store_min]:.3f}")

print("\nLoja com maior desemprego:")
print(f"Loja {store_max} → {unemployment_by_store[store_max]:.3f}")

holiday_df = df[df["Holiday_Flag"] == 1].copy()
top_holidays = holiday_df.sort_values("Weekly_Sales", ascending=False)

print("\nTop 10 semanas de feriado com maiores vendas:")
print(top_holidays[["Store", "Date", "Weekly_Sales"]].head(10))