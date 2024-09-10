import { SCodeBlock, SText, STitle } from "components";

export const PlayingGames = () => {
  return (
    <>
      <STitle>Observation</STitle>
      <SText>
        Given the first two dice, you can generate every single combination, in a set.
        Given the first die of the second pair, you can determine whether the dice will produce an identical distribution, and if so, you can find the last die.
      </SText>
      <STitle>Brute Force</STitle>
      <SText>
        We can brute force every possible first die, as we know the first pair of dice have a maximum value of $8$, the maximum possible combination is $16$, and we know that at least one of the second pair
        has a value of less than or equal to $8$ , as the biggest value of both cannot be greater than $8$ , as this would mean their sum is more than or equal to $18$, which is too big
        To brute force the first die of the second pair, iterate through all the numbers from one to eight for all faces, and dont let a face value be smaller than one before it (to avoid duplicates).
        With the maximum possible $n being $8$, we can just have $8$ nested for loops, to generate every single die face. However for $n$ less than $8$, we can set the for loops to not iterate, and ignore the first $8-n$ faces.
        Note that there is a python module which does this for us, $itertools.combinations_with_replacement$ which brute forces the first die as described.
      </SText>
  
      <STitle>Solution</STitle>
      <SText>
        We brute force over all possible first die as described above.
        We then check if a second die exists.
        The first face of the second die is simply the smallest combinatition minus the first face of the first die.
        We then check if the other faces provide valid combinations.
        Repeat this for all the faces, and if everything is valid, it will provide an answer.
      </SText>
  
      <STitle>Code</STitle>
      <SCodeBlock path="playinggames/sol"/>
    </>
  );
};
