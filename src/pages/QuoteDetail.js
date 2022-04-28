import { useParams, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import React from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const params = useParams();

  const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Learning React is Fun" },
    { id: "q2", author: "Mark", text: "Learning React is Great" },
  ];

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Commnets
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
