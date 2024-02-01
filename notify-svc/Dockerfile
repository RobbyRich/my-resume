FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . ./
RUN dotnet restore "./notify-svc.csproj"
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/runtime:8.0 AS base
WORKDIR /app
COPY --from=build /src/out .
ENTRYPOINT ["dotnet", "notify-svc.dll"]
EXPOSE 5000