import { Link, SCodeBlock, SSubtitle, SText, STitle } from "components";
import { brace } from "solutions/util";

export const PrimeConnections = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        The problem involves finding the shortest path between two prime numbers. 
        We can treat the prime numbers as nodes in a graph, and the edges as the connections between them.
        Since the graph is undirected, we can use a breadth-first search 
        (BFS, see more <Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">here</Link>) 
        to find the shortest path between the two prime numbers.
      </SText>

      <STitle>Solution</STitle>
      <SText>
        To carry out a BFS, we should generate all the adjacent prime numbers for each prime number, 
        and then search through them to find the solution.
      </SText>
      <SSubtitle>Generating Primes</SSubtitle>
      <SText>
        Initially, we need an efficient way to check if a number is prime.
        To do this, we can use the Sieve of Eratosthenes algorithm 
        (see <Link href="https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html">here</Link> for more detail)
        to generate all prime numbers up to the specified limit.
        This will create an array of booleans, where the index represents the number and the value represents whether the number is prime, 
        allowing us to efficiently check if a number is prime in $\mathcal{brace("O")}(1)$ time.
      </SText>
      <SSubtitle>Finding the Shortest Path</SSubtitle>
      <SText>
        Now we can carry out a breadth first search from the starting node. 
        In a breadth first search, we maintain a queue of nodes to visit and their distance from the start, as well as a set of visited nodes.
        For each node, we can iterate through all the prime numebrs that are $2^k$ away from the current node for some value $k$, 
        and push them onto the end of the queue.
        If we ever reach the end node, we can return the distance of that node from the start node.
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="primeconnections/sol"/>
    </>
  );
};
