# VAO profile for `hafas-client`

[*Verkehrsauskunft Österreich (VAO)*](https://www.verkehrsauskunft.at) is a government funded organisation providing (public-)transport data for austria.
It is basically the same as STV as STV also uses the same data as VAO.
This profile adds *VAO*/*Verkehrsauskunft Österreich* support to `hafas-client`.

## Usage

```js
import {createClient} from 'hafas-client'
import {profile as vaoProfile} from 'hafas-client/p/vao/index.js'

const userAgent = 'link-to-your-project-or-email' // adapt this to your project!

// create a client with VAO profile
const client = createClient(vaoProfile, userAgent)
```

Check out the [code examples](example.js).
