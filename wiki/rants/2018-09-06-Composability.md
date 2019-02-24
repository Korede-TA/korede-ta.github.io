---
layout: wikiindex
post: true
---
# Composability

Sep 06, 2018

*Notes on this topic from multiple angles including mathematics, programming languages (both control flow and memory interactions), software applications, operating systems, e.t.c.*

w.r.t. programming languages, Haskell (Functional languages in general) is the prime example of a language built with the idea of *composable computation* in mind, hence the concept of a monads typeclasses, the atomic unit of composable computation, which encapsulate the result of combining (binding) operations. 

what makes good composability possible in languages like Haskell and SQL is the use of (or robust support for) atomically transactional operations. i would argue that the parallel concept to monads in SQL is the transaction, which encapsulates an atomic operation on persistence (see ACID principles). A transaction can be built out of a number of other atomic operations but its result is indivisible (i.e. no discernable intermediate states) and deterministic given the same constituent sub-operations

— perhaps i should also be clearer on what i mean by atomicity: the smallest individible unit of something, in this case a computation. 

in terms of **control flow**, composable operations are characterized by having one entry and one exit, in that they can be used as a statement anywhere in a program without disrupting the control flow, leading to **[minimal structured control flow](https://en.wikipedia.org/wiki/Control_flow#Minimal_structured_control_flow)**  (*personal note: see the parallels to this and what you were trying to implement in artisan 1.0*). this idea originted from research by Böhm and Jacopini in 1966 on eliminating "goto" statements from programs, then replacing them with "if-else-then"s and "loops" (see wikipedia section). 

the concept of Monads from functional programming (also called “workflows” in the f# community), is essentially another take on this principle that lifts directly from category theory (pun intended). monads serve as a way of accounting for and managing side effects in otherwise pure and composable operations that increase the number of/change the types of the outputs — an error (sideeffect) handling technique in essence.

An idea around this → **Software Transactional Memory**: works by, instead of acquiring locks on modifiable data, it makes modifications and does an after-the-fact check for conflicts on the data, aborting and retrying if any are found. 

personal note: the fundamental difference between transactional computation and regular computation is that transactions consider failure to be a feature and not an anomaly

something else, i've culled from the "universal composability" wikipedia page: [universal composability in terms of turing machines](https://en.wikipedia.org/wiki/Universal_composability#Computation_model) :

> *"The computation model of universal composability is that of interactive Turing machines that can activate each other by writing on each other's communication tapes"*

new thought as at Dec 31, 2018: since Turing machines and Lambda calculus are both equivalently agreed upon models for universal computation, I wonder whay the “computation model of universal composability” in terms of lambda calculus

## In terms of software applications

... i'm thinking of how to be able to string together applicational funcionality without any care for what the applications are doing. I think two core brands of composability are relevant in this: [functional composition](https://en.wikipedia.org/wiki/Function_composition_(computer_science)) and [object composition](https://en.wikipedia.org/wiki/Object_composition). my intution tells me that what could be achieved with this would involve functional composition through object decomposition (this is kind of meaningless but i think the phrasing serves as a good pointer to the mental-memory location of the mental model i'm building around this). the essence of this is to remove dependency of applications by decomposing relevant data in objects in between function passes so as to remove the need for linkable signatures. object composition/decomposition points to the idea of being able to compound or *filter* data from 1 or more sources so that individual functions only recieve info that's relevant to them.

GraphQL seems like a promising tool that could be extended to implement a common API layer for these kind of applications as it has composability primitives built in. Marius Eriksen's "Your Server as a Function" paper proposes three key primitives for a composable system of services "Futures", "Services" and "Filters" (partly inspired by the UNIX philosophy) that is implemented within Twitter's microservices and account for the distributed, asynchronous and concurrent nature of web systems (albeit formulated for the internal services case). Further tying a querying and query-composing layer like GraphQL to system primitives as proposed by Eriksen fulfils two key things: 1) offering a common public query layer to a system designed for internal services and 2) building a distributed, cross-services framework to enable composable querying on the frontend. The finagle runtime library has the concepts around Eriksen's paper encoded in them; the main challenge will be in stretching these concepts to the public-service case. 

Expression based languages (where everything returns something, as opposed to statement-base ones) is a cornerstone of composability.

**Functional Progamming vs Functional Applications**

*new section as at* Nov 26, 2018

The essence of functional programming, and category theory on which it is based, is *composability.* I'm beginning to be of the opinion that the principles of composability, as exemplified through concepts like Monads, would be more useful if adapted to the application level as opposed to just for programming languages. what i envision is something similar to the unix philosophy in terms of both seperation of concerns as well as flexible composability via constructs like piping and things of that nature. in simpler terms: a haskell-based shell ("hash", if i may :p), where composabililty is enforced at the inter-application/executable level instead of intra-application or  code/logic level. haskell as a language has proved notoriously dense to understand and i think this is because there is limited necessity for powerful composability at that level, and instead, we should be focused on making individual executables small and single-responsibility, while baking in more tools for composing their functionality into the shell.

Expression-based languages, such as haskell, where everything returns something, as opposed to statement-based ones is a cornerstone of composability.

Also found this page interesting: [https://www.haskell.org/arrows/index.html](https://www.haskell.org/arrows/index.html)

**techonologies** 

*new section as at Nov 13, 2018*

interesting tech/research projects exploring composability primitives at different levels of software stacks

- Malcology programmable storage from disorderlylabs: [http://programmability.us/malacology/](http://programmability.us/malacology/)

References:

- [Software transactional memory](https://en.wikipedia.org/wiki/Software_transactional_memory#Composable_operations) — "a concurrency control mechanism analogous to database transactions for controlling access to shared memory in concurrent computing", "an alternative to lock-based synchronization"
- haskell stm package: [http://hackage.haskell.org/package/stm](http://hackage.haskell.org/package/stm)
    - golang port of this package (take note of implementation and limits thereof): [https://github.com/lukechampine/stm](https://github.com/lukechampine/stm) (consider doing update of this as it's no longer maintained, esp when generics in go2.0)
- google scholar results for "software transactional memory": [https://scholar.google.com/scholar?as_ylo=2005&q="software+transactional+memory"](https://scholar.google.com/scholar?as_ylo=2005&q=%22software+transactional+memory%22)
- Your Server as a Function → [https://monkey.org/~marius/funsrv.pdf](https://monkey.org/~marius/funsrv.pdf)
- Charismatic Technology:  [http://morganya.org/research/Ames-charisma-aarhus.pdf](http://morganya.org/research/Ames-charisma-aarhus.pdf) (seems to neglect lisp and smalltalk)

*more [assorted rants](https://www.notion.so/bbd9fba3-75e0-42ff-ba0d-18ab195b4467)*
