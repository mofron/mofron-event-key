# mofron-event-key
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

key event for mofron

## event function parameter

- component: event target component object

- string: event target key

- mixed: user specified parameter

## Feature
 - it is possible to implement key-event to target component by setting type that is "keydown", "keypress" or "keyup" (default type is "keydown")
 - it is possible to filter the target event key by setting the 'key' method.
 - the target key is all if user not set 'key' method.
## Attention
 - set event to mofron.window or mofron.document if you apply key-event to the whole page.

# Install
```
npm install mofron mofron-event-key
```

# Sample
```html
<require>
    <tag load="mofron-comp-input">Input</tag>
    <tag load="mofron-event-key">Key</tag>
</require>

<script name=key run=init>
    console.log("'" + key2 + "' key press");
</script>

<Input name=inp event=Key:@key></Input>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | listener | function | event function |
| | | mixed | event parameter |
| ◯  | key | string | event target key |

