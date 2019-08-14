---
layout: w
post: true
---
# what's the difference between trustful and trustless systems 

Nov 26, 2018

what's the difference between trustful and trustless systems, in the general context at least:

i would say that there's no such thing as a trustless environment? simply environments where trust does not accumulate,.. as opposed to trustful environments/systems where previous trust from successful interactions accumulates and persists across interactions.

let me give an example:

jack has had jill deliver packages for them* in the past. the first few times this happened, jack had to verify that jill actually delivered the package because they had no trust in jill. subsequently, due to delivered packages

a counter example in a trustless context:

jack has had jill deliver their packages multiple times. jack doesn't actually know who jill is and never interacts with them directly. so jack always verifies the package delivery because the deliverer is assumed to be different every time. there's no chance that jack build trust for  jill because they don't interact with/know each other and, in essence, don't trust each other

(* jack and jill are non-binary and use pronouns "they/them/their")

the pertinent question that arises from this framework, especially in the distributed computing context is: is there a realistic extent to which trust can accumulate as a result of a track record of interactions between entities? the implication of this idea could be optimizing verification in blockchains (or other distributed) systems by simply not doing it based on past verifications.

of course there are limits to trust in any context, and it only provides us with a probability of verification based off past interactions, but this probability could be useful nonetheless.

this is all very abstract thought... i was wondering if i could adapt ideas around accumulating trust in human interactions to distributed computing questions... because it seems the [Byzantine Generals Problem](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance#Byzantine_Generals'_Problem) didn't account for the existence of accumulated trust between generals due to fighting alongside each other in previous wars.

perhaps it would be useful for blockchains to also codify this concept of accumulated trust?

follow up as at Feb 10, 2019:

- stumbled across some ideas corroborating the relevance of this framework in blockchain contexts: [https://nicola.io/computation-coin/2017](https://nicola.io/computation-coin/2017)
