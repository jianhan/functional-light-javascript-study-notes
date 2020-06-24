## Chapter 4: Function Composition and Abstraction

### Abstraction

Definition 1. Abstraction is “the process of considering something independently of its associations, attributes, or concrete accompaniments,”

It is a word from latin, means draw away, remove things. All software is abstraction, hiding away all the hard work and mindless details while we reap the
benefits.

A lot of software processes get repeated again and again, we remove duplication by writing a component of some kind (a function, module, class,
etc...), giving it a name (identity), and reusing it as many times as we like.

#### Abstraction Components
1. Generalization is the process of finding similarities (the obvious) in repeated patterns, and hiding the similarities behind an abstraction.
2. Specialization is the process of using the abstraction, supplying only what is different (the meaningful) for each use case.

### Software Architecture
Software solutions should be decomposable into their component parts, and recomposable into new solutions, without changing the internal component implementation details.

#### Abstraction in Software
Abstraction can appear in many forms, modules, classes, a cron job script, etc.. In the case of FP, function is abstraction.