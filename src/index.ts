import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man Unitied');

summary.buildAndPrintReport(matchReader.matches);
