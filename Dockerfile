FROM microsoft/dotnet:2.2-aspnetcore-runtime as base
WORKDIR /app
EXPOSE 80
ENTRYPOINT ["dotnet", "signin-form.dll"]

FROM microsoft/dotnet:2.2-sdk AS build

RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs


WORKDIR /app/src
COPY ./src/*.csproj ./
RUN dotnet restore

COPY ./src ./
RUN dotnet publish -c Release -o /app/out

FROM base AS final
WORKDIR /app
COPY --from=build /app/out .
