## Chapter 4: Function Composition and Abstraction

### Abstraction

Definition 1. Abstraction is “the process of considering something independently of its associations, attributes, or concrete accompaniments,”

It is a word from latin, means draw away, remove things. All software is abstraction, hiding away all the hard work and mindless details while we reap the
benefits.

A lot of software processes get repeated again and again, we remove duplication by writing a component of some kind (a function, module, class,
etc...), giving it a name (identity), and reusing it as many times as we like.

1. All curried functions are abstractions
2. All higher-order functions are generalizations that you can specialize by passing one or more arguments.

#### Abstraction Components
1. Generalization is the process of finding similarities (the obvious) in repeated patterns, and hiding the similarities behind an abstraction.
2. Specialization is the process of using the abstraction, supplying only what is different (the meaningful) for each use case.

Abstraction is the process of extracting the underlying essence of a concept. By exploring common ground between different problems from different domains.

### Software Architecture
Software solutions should be decomposable into their component parts, and recomposable into new solutions, without changing the internal component implementation details.

#### Abstraction in Software
Abstraction can appear in many forms, modules, classes, a cron job script, etc.. In the case of FP, function is abstraction.


### Characteristics of Good Abstractions
* Composable
* Reusable
* Independent
* Concise
* Simple

### How Abstraction Works
It allows a progression from generalized to specialized functions, we can abstract by pulling out the generality between two or more tasks. The general part is defined once, so as to avoid repetition. To perform each task’s specialization, the general part is parameterized.

composition is helpful even if there’s only one occurrence of something

### Separation Enables Focus
Another definition of abstraction: abstraction is a process by which the programmer associates a name
with a potentially complicated program fragment, which can then be
thought of in terms of its purpose of function, rather than in terms of
how that function is achieved. By hiding irrelevant details, abstraction
reduces conceptual complexity, making it possible for the programmer
to focus on a manageable subset of the program text at any particular time.

**We’re not abstracting to hide details; we’re separating details to improve focus.**

The function’s implementation is focused on how to compute something, and the call-site using that function by name is focused on what to do with its output. We abstract the how
from the what so they are separate and separately reasonable.

#### Declarative vs Imperative
imperative vs. declarative programming style. Imperative code is primarily concerned with explicitly stating how to accomplish a task. Declarative code states what the outcome should be, and leaves the implementation to some other responsibility.

#### Find the Balance
Declarative code abstracts the what from the how. Typically declarative coding is
favored in readability over imperative, though no program (except of course machine
code 1s and 0s) is ever entirely one or the other. The programmer must seek balance
between them.

#### Destructuring
Destructuring is a pattern for assignment that describes how a compound value (object, array) is taken apart into its constituent values.

#### Composition as Abstraction
Composition is a powerful tool for abstraction that transforms imperative code into more readable declarative code.