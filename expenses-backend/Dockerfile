## BUILD
# docker build -t expenses-backend:0.1.0 .

## RUN
# docker run -p 8500:8500 -d -e SERVER_PORT=8500 -e ORACLE_USER=appuser -e ORACLE_PASSWORD=mypasswordapp -e ORACLE_CONNSTR=172.17.0.2:1521/xepdb1 expenses-backend:0.1.0
# docker run -p 8500:8500 -d -e SERVER_PORT=8500 -e ORACLE_USER=appuser -e ORACLE_PASS=mipasswordapp -e ORACLE_CONNSTR=172.17.0.2:1521/xepdb1 `full-back:0.1.0

# docker run -e APP_USER=appuser -e APP_USER_PASSWORD=mypasswordapp -d -p 1521:1521 -e ORACLE_PASSWORD=mypassword -v oracle-volume:/opt/oracle/oradata -v "C:\Users\hp\Desktop\expenses-manager-backend\expenses-backend\db:/container-entrypoint-initdb.d" gvenzl/oracle-xe:21.3.0


FROM oraclelinux:8.6

RUN dnf install -y oracle-instantclient-release-el8
RUN dnf install -y oracle-instantclient-basic

RUN dnf install -y @nodejs:16

ENV SERVER_PORT="8500" \
    ORACLE_USER="oracledb" \
    ORACLE_PASSWORD="mypass" \
    ORACLE_CONNSTR="localhost:1521/orclpdb"

COPY . /opt/app

WORKDIR /opt/app

RUN npm install

CMD ["npm", "start"]