---
title: Being a tech lead at dxw
---

## Being a tech lead…

### …at an agency

Our work with a client is always temporary. Sometimes we know the end before we
start, and sometimes it seems like it will go on forever. But eventually the
relationship will end.

As an agency, our clients bring us in when there's something they can't do or
something they don't have the time to do.

#### Working with clients short of expertise

If our client can't do the thing, then you're explicitly there as the expert.
You're there because you're the one who knows how to build the software they
need. That means when you tell the client how to build it, they'll listen.

They might be trying to build their own in-house capability; if so they'll be
looking to you to help them learn. Yes, you're there to deliver working software
that meets the needs of their users. But you're also there to help them get
better. When we leave, we need to leave them with working software and an
in-house team that has the expertise to maintain and develop it.

However, they might not be trying to build their own team. Although software is
never done, we need to try our best to get there by the time we leave. Their
service needs to be:

- maintainable with minimal effort
- reliable, as there's no standing team to respond to issues
- feature-complete enough and with a good enough user experience to meet their
  service users' core needs

Getting your software into that state is no mean feat, but knowing that's the
end state can help your prioritisation from the start.

#### Working with clients short of time

If our client can do the thing, but doesn't have the time, then you're no longer
the expert. You're a specialist, sure, but if they can do what we can, you're
one of many. Instead of teaching them our best practices, you have to adopt
theirs. You might get a few chances to work with some individuals who are keen
to learn, but really you're there to deliver working software. Any capability
building is a side effect.

The exit plan in these cases is almost always handing over your service to their
in-house teams. Many organisations in this state will have internal governance
to ensure that handover will be possible. So, as well as adopting their best
practices and technology standards, you'll be spending some of your time
engaging with the technical governance the client has in place. Hopefully you
can use the things your team is already doing – like architecture decision
records – to do that engagement. Sometimes you'll need to do extra work.
Sometimes quite a lot of it.

This extra work can feel really frustrating when you're trying to ship a
service, but it's really important. Just as we wouldn't take on a service we had
no hand in that doesn't meet any of our standards, we shouldn't expect our
clients to. Part of your role is to build relationships with the technology
folks in the client's organisation, find out which bits of governance we need to
care about, and make sure your team is in a good position to satisfy them. Often
those people you build relationships with will be happy to help if you involve
them early enough!

Sometimes the amount of governance we need to go through takes an unexpected
amount of effort, particularly when the drive for governance comes from a
different place to the drive for delivery. We do our best to meet all the
governance needs but when that effort starts to risk delivery, we present those
risks, along with alternatives, to the client. Ultimately, it's up to them what
risk they're prepared to carry. We often have to do some amount of mediation in
that case (usually biased towards delivery - it's what we're there for after
all).

### …for public services

The public sector has a history of abdicating digital and technology decisions
to suppliers. That's caused a loss of the expertise needed even to make sound
decisions about those suppliers. That's slowly changing, but it's still very
normal to be working with (passionate, driven, experienced) civil servants who
haven't worked in an agile way, who don't know how software is built, and who
don't know how much software costs.

That means part of your role is education. For the public sector to properly
complete their digital transformation, it's not enough to put some services on
the internet. We need to reverse that loss of expertise, so that all the folks
involved in building services are able to make well informed decisions. As a
tech lead:

- you understand how software is built
- you understand how to work in an agile way
- hopefully you understand how much software costs (though we're always happy to
  teach you how to think about this)

Share that understanding.

Another feature of public sector technology (though by no means unique to the
public sector) is a lack of money to compete with big tech and venture capital
when hiring. That means there can be a lack of experienced technologists, and a
short tenure for those technologists they do manage to hire. But it also means
you'll often be working with folks who are motivated more by doing public good
than they are by chasing money.

### …at the intersection of the two

When building a public service, it can be hard to ever call it done. Especially
when much of your team's time is spent dealing with broken foundations (lack of
APIs, legacy systems, or messy and incomplete data) rather than building the
service. But the lack of money in the public sector means we often have to
support our clients in building something that's good enough, before they
redirect their resources onto other priorities. You can serve the users and
client best by building in an agile way throughout. Always find the minimal
version of the feature your team can ship, and leave it open for iteration
later. With luck you'll get to do that iteration, but if you don't our client
will have a service that's always in a workable state no matter where we stop.

Governance is generally a good thing when built from an understanding of how to
work in an agile way and how software is built. When it comes from a history of
supplier management, it can instead smell a lot like waterfall approaches and
arse covering. If you're in this situation then building relationships becomes
even more important. You'll need to engage with the governance processes, but
you'll also need to push back against parts of them. It's likely that the client
is undergoing something of a digital transformation, so there are probably
people there who can help you push an agile approach. You're not on your own in
doing this; get other folks in the team (like your delivery lead or technical
architect) to help, and call on the wider dxw team when you need it.

## What our tech leads do inside teams

The role of a tech lead at dxw is to lead the technical work of the team. Given
software is built by and for people, that means it's very much at the squishy
intersection of technical expertise and people skills.

A tech lead's job is to:

- translate the problems to be solved into pieces of technical work for the team
  to pick up
- advocate for building software that meets user needs
- make sure the rest of the developers understand the domain and the work, and
  aren't blocked from doing it
- encourage people to pair together on tricky work or to build team knowledge
- teach other members of the team, directly and by example, encouraging them to
  make sure their work is clear and maintainable
- make sure that the team has the opportunity to learn
- keep an eye on the development processes of the team, and address issues (e.g.
  stories continually taking much longer than expected, people being blocked by
  PRs not being reviewed, lots of time spent chasing down bugs)
- be a technical representative for the team - taking (necessary) meetings and
  answering questions on behalf of the whole team, allowing them to focus on
  development work
- be responsible for the team learning from failure and for incident reviews
  happening when something goes wrong
- ensure that the development process and repository follow our
  [RFCs](https://github.com/dxw/tech-team-rfcs)

You will often, but not always, be the most experienced developer on the team.
When you are you'll also be expected to make clear and informed architectural
decisions, and communicate those with the team and stakeholders.

A lot of those points overlap to various degrees with things a delivery lead or
product manager do. The relationship between the tech lead and the people in
those roles is very important. Addressing issues with team processes is a lot
easier when done together with the delivery lead. Ensuring the team understands
the domain and that developers are included early enough in story planning
should be done with the help of the product manager.
