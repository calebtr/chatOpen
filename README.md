# chatOpen
Uses JavaScript localStorage to determine if a slide-out chat window is open as the user browses a site. 

Use:

- chatOpen.getStatus();
- chatOpen.setStatus(boolean);
- chatOpen.toggleStatus();

Example (uses jQuery):

    &lt;script type ="text/Javascript">

      $('#chat-header').click(function() {

        $('#chat-wrapper').toggle();

        chatOpen.toggleStatus();

      });

      if (chatOpen.getStatus()) {

        $('#chat-wrapper').show();

      }

    &lt;/script>

    &lt;div>

      &lt;div id="#chat-header">Chat header&lt;/div>

      &lt;div id="#chat-wrapper" style="display: none;">Chat Widget&lt;/div>

    &lt;/div>
